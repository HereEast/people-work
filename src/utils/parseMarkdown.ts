import { Root, Element } from "hast";
import { visit } from "unist-util-visit";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export async function parseMarkdown(markdown: string) {
  const addAnswerClassToLinks = () => (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "a") {
        node.properties = node.properties || {};

        const classNames = getClassNames(node);

        node.properties.className = [...classNames, "answer"];
      }
    });
  };

  const file = await remark()
    .use(addAnswerClassToLinks)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);

  return String(file.value);
}

// Get classNames
function getClassNames(node: Element) {
  const currentClassName = node.properties.className;

  let classNames: string[] = [];

  if (typeof currentClassName === "string") {
    classNames = [currentClassName];
  }

  if (Array.isArray(currentClassName)) {
    classNames = currentClassName.filter((item) => typeof item === "string");
  }

  return classNames;
}
