import { Root, Element } from "hast";
import { visit } from "unist-util-visit";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

interface IOptions {
  targetBlank?: boolean;
}

export async function parseMarkdown(markdown: string, options: IOptions = {}) {
  const handleElements = () => (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      node.properties = node.properties || {};

      if (node.tagName === "a") {
        handleLinks(node, options);
      }
    });
  };

  const file = await remark()
    .use(remarkRehype)
    .use(handleElements)
    .use(rehypeStringify)
    .process(markdown);

  return String(file.value);
}

// Handle links
function handleLinks(node: Element, options: IOptions = {}) {
  const { targetBlank } = options;

  if (targetBlank) {
    node.properties.target = "_blank";
    node.properties.rel = "noopener noreferrer";
  }
}

// const classNames = getClassNames(node);
// node.properties.className = [...classNames, "answer"];

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
