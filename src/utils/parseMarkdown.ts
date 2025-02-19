import { Root, Element } from "hast";
import { visit } from "unist-util-visit";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

interface IOptions {
  targetBlank?: boolean;
}

export async function parseMarkdown(markdown: string, options: IOptions = {}) {
  const { targetBlank } = options;

  const handleLinks = () => (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "a") {
        node.properties = node.properties || {};

        const classNames = getClassNames(node);

        node.properties.className = [...classNames, "answer"];

        if (targetBlank) {
          node.properties.target = "_blank";
          node.properties.rel = "noopener noreferrer";
        }
      }
    });
  };

  const file = await remark()
    .use(handleLinks)
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
