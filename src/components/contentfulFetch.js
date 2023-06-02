import {createClient} from "contentful"



export default function ContentfulFetch() { 


    const client = createClient ({
        space: "dbq83de34hcz",
        accessToken: "zn3M4WxT-sr0ufU2uFOmODxOYF1Zsdfay3g2Qm04YVc",
        host: "cdn.contentful.com",
    })


    const FetchRecipes = async () => {
        
        try {
            const recipesData = await client.getEntries({
                content_type: "recipe",
                select: "fields",
                order: "fields.category"
            });

            const arrangedData = recipesData.items.map((item)=> {
                const image = item.fields.image.fields.file.url;
                return {...item.fields , image}
            })

            // console.log("recipes contentful",recipesData)
            // console.log("arrangedData contentful",arrangedData)
            return arrangedData
        } catch (error) {
            console.log("error",error);
            }
        };
        FetchRecipes()


    return {FetchRecipes}
}