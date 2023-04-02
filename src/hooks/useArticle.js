import useFetch from "./useFetch";

export default function useArticle(args) {
  console.log(useFetch("/article", "POST", JSON.stringify(args)))


  let articleObject = {
    "response": {
        "title": "title",
        "body": `
        LOREM IPSUM
        FONT GENERATOR
        IMAGES
        PLUGINS
        GENERATORS
        ENGLISH
        Lorem Ipsum Generator
        Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!
        
        GENERATED LOREM IPSUM
        2
         
        PARAGRAPHS
         
        COPY 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae aliquet nec ullamcorper sit amet. Auctor eu augue ut lectus arcu bibendum. Nisi scelerisque eu ultrices vitae auctor eu. Adipiscing at in tellus integer feugiat scelerisque. Etiam sit amet nisl purus in mollis. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Turpis egestas pretium aenean pharetra. Cursus sit amet dictum sit amet. Pharetra convallis posuere morbi leo urna molestie. Amet est placerat in egestas erat imperdiet sed euismod nisi. Tellus at urna condimentum mattis pellentesque id nibh tortor. Odio facilisis mauris sit amet. Purus viverra accumsan in nisl nisi scelerisque eu. Massa eget egestas purus viverra accumsan in nisl nisi. Aliquet eget sit amet tellus cras adipiscing. Praesent elementum facilisis leo vel fringilla est ullamcorper. Eleifend donec pretium vulputate sapien nec sagittis aliquam.
        
        Tristique senectus et netus et malesuada fames. Nibh nisl condimentum id venenatis a condimentum. Etiam tempor orci eu lobortis elementum. Nunc sed blandit libero volutpat sed. Magna fringilla urna porttitor rhoncus dolor. Id diam maecenas ultricies mi eget mauris pharetra et. Elementum pulvinar etiam non quam. Parturient montes nascetur ridiculus mus mauris vitae. Ut ornare lectus sit amet est. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. Egestas purus viverra accumsan in.
        
        © 2015 — 2023
        PRIVACY POLICY
        SITEMAP
        FONT GENERATOR
        IMAGES
        PLUGINS
        GENERATORS
        SHARE THE LOREM
        WA
        SAI
        `,
    },
    "loading": false
}

  return articleObject;

  return useFetch("/article", "POST", JSON.stringify(args));
}
