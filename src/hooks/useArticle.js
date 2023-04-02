import useFetch from "./useFetch";

export default function useArticle(args) {
  console.log(useFetch("/article", "POST", JSON.stringify(args)))
  return useFetch("/article", "POST", JSON.stringify(args));
}
