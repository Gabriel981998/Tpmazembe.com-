import sanityClient  from "@sanity/client";

export const client=sanityClient({
    projectId:"j3xxl8ax",
    dataset: "production",
  useCdn: true,
  apiVersion: "2022-09-14",

})
