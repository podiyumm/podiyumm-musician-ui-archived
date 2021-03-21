import ApiService from "@/api/api";

 const SongApiService = {
  query() {
    return ApiService.query("song");
  },
  get(slug) {
    return ApiService.get("song", slug);
  },
  create(params) {
    return ApiService.post("song", { song: params });
  },
  update(slug, params) {
    return ApiService.update("song", slug, { song: params });
  },
  destroy(slug) {
    return ApiService.delete(`song/${slug}`);
  }
};

export default SongApiService;

