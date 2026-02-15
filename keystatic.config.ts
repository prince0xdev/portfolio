import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    resume: singleton({
      label: "Resume",
      format: "json",
      schema: {

      }
    })
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
        summary: fields.text({ label: "Summary", validation: {isRequired: true} }),
        coverImage: fields.image({
          label: "Cover image",
          validation: { isRequired: true },
        }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
