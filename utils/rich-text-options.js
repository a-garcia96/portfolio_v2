import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

const options = {
  preserveWhitespace: true,
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <h1 className="text-xl font-semibold text-blue-500">{children}</h1>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <h2 className="text-lg font-semibold text-blue-500">{children}</h2>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="mb-5 text-sm leading-7">{children}</p>;
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol className="list-decimal">{children}</ol>;
    },
    // [BLOCKS.LIST_ITEM]: (node, children) => {
    //   return <li>{children}</li>;
    // },
    [BLOCKS.TABLE]: (node, children) => (
      <table className="inline-block">
        <tbody className="divide-y divide-gray-300">{children}</tbody>
      </table>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => (
      <tr className="divide-gray-230 divide-x">{children}</tr>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th className="bg-red-500 [&>p]:text-xs">{children}</th>
    ),
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="[&>p]:font-extralight">{children}</td>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      if (node.data.target.fields.file.contentType == "image/png") {
        return (
          <img
            src={`https://${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.description}
            className="w-full"
          />
        );
      }
    },
    [INLINES.HYPERLINK]: (node, text) => (
      <a className="text-blue-wave-500 underline" href={node.data.uri}>
        {text}
      </a>
    ),
  },
};

export default options;
