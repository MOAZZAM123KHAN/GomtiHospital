import axios from "@/lib/axios";

export const publicBlogApi = {
  getBlogs: (params?: {
    page?: number;
    limit?: number;
    category?: string;
  }) =>
    axios.get("/blogs", { params }).then(res => res.data),

  getCategories: () =>
    axios.get("/blogs/categories").then(res => res.data),
};
