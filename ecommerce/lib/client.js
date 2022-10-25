
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

 export const client =sanityClient({
    projectId:'s112vv84',
    dataset:'production',
    apiVersion:'2022-10-25',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
})
 const builder= imageUrlBuilder(client);
export const urlFor=(source)=>{
     return builder.image(source)
}