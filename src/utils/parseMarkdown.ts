import { Root, Element } from "hast";
import { visit } from "unist-util-visit";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export async function parseMarkdown(markdown: string) {
  const handleElements = () => (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      node.properties = node.properties || {};

      if (node.tagName === "a") {
        handleLinks(node);
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
function handleLinks(node: Element) {
  const isTargetBlank = (node.properties.href as string).includes("https");

  if (isTargetBlank) {
    node.properties.target = "_blank";
    node.properties.rel = "noopener noreferrer";
  }
}
