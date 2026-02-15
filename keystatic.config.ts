import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { isRequired: true } },
        }),
        publishedAt: fields.date({
          label: "Published Date",
          defaultValue: Date.now().toString(),
          validation: { isRequired: true },
        }),
        summary: fields.text({ label: "Summary" }),
        coverImage: fields.image({
          label: "Cover image",
          validation: { isRequired: true },
        }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
