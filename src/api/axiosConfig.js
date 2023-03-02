import axios from "axios"

const apiKey = "90073ec0a03c4635453fb4cea8449b86";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
  },
});

export async function fetchCategories() {
  try {
    const response = await axiosInstance.get("/genre/movie/list", {
      params: {
        language: "pt-BR",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMoviesByCategory(categoryId) {
  console.log(categoryId,'categoryId')
  try {
    const response = await axiosInstance.get("/discover/movie", {
      params: {
        with_genres: categoryId.genreId,
        language: 'pt-BR'
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}`, {
      params: {
        language: "pt-BR",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchImage(movieId) {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/images`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProviders(movieId) {
  try {
    const response = await axiosInstance.get(
      `/movie/${movieId}/watch/providers`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
