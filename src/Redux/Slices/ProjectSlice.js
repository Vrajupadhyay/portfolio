import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import axiosInstance from "../../Helper/axiosInstance";
import { logout } from "./AuthSlice";

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

export const getProjects = createAsyncThunk("project/getProjects", async () => {
  try {
    const response = await axiosInstance.get("/project/GetProject.php");
    if (response.data.status === "success") {
      toast.success(response.data.message);
      return response.data;
    } else if (response.data.status === "logout") {
      // If logout status is received, dispatch the logout action from the authSlice
      dispatch(logout());
      toast.error(response.data.message);
      return response.data;
    } else {
      toast.error(response.data.message);
      return response.data;
    }
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const createProject = createAsyncThunk(
  "project/createProject",
  async (data, { dispatch }) => {
    try {
      const response = await axiosInstance.post(
        "/project/AddProject.php",
        data
      );
      if (response.data.status === "success") {
        toast.success(response.data.message);
        return response.data;
      } else if (response.data.status === "logout") {
        // If logout status is received, dispatch the logout action from the authSlice
        dispatch(logout());
        toast.error(response.data.message);
        return response.data;
      } else {
        toast.error(response.data.message);
        return response.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const updateProject = createAsyncThunk(
  "project/updateProject",
  async (data, { dispatch }) => {
    try {
      const response = await axiosInstance.post(
        "/project/UpdateProject.php",
        data
      );
      if (response.data.status === "success") {
        toast.success(response.data.message);
        return response.data;
      } else if (response.data.status === "logout") {
        // If logout status is received, dispatch the logout action from the authSlice
        dispatch(logout());
        toast.error(response.data.message);
        return response.data;
      } else {
        toast.error(response.data.message);
        return response.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "project/deleteProject",
  async (data, { dispatch }) => {
    try {
      const response = await axiosInstance.post(
        "/project/DeleteProject.php",
        data
      );
      if (response.data.status === "success") {
        toast.success(response.data.message);
        return response.data;
      } else if (response.data.status === "logout") {
        // If logout status is received, dispatch the logout action from the authSlice
        dispatch(logout());
        toast.error(response.data.message);
        return response.data;
      } else {
        toast.error(response.data.message);
        return response.data;
      }
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload.data;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createProject.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = [...state.projects, action.payload.data];
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateProject.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = state.projects.map((project) =>
          project.id === action.payload.data.id ? action.payload.data : project
        );
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteProject.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = state.projects.filter(
          (project) => project.id !== action.payload.data.id
        );
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;
