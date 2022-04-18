import searchRepo from "./searchRepo";

export default ($axios) => ({
    search: searchRepo($axios),
});
