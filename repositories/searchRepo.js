// import axios from "axios";
// export function getArticles(keyword) {
//     return axios.get(
//         `https://newsapi.org/v2/everything?q=${keyword}&from=2022-03-18&sortBy=publishedAt&apiKey=d174720f7f28494eb86e576061f0cc64`
//     );
// }
// export const searchRepo = {
//     getArticles,
// };

export default ($axios) => ({
    getArticles(keyword) {
        return $axios.$get(
            `https://newsapi.org/v2/everything?q=${keyword}&from=2022-03-18&sortBy=publishedAt&apiKey=d174720f7f28494eb86e576061f0cc64`
        );
    },
});
