import { useEffect, useState } from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import API from "../services/api";

function EditItem() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [image, setImage] =
    useState(null);

  const [previewImage, setPreviewImage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      category: "",
      location: "",
      status: "lost"
    });

  useEffect(() => {

    fetchItem();

  }, []);

  const fetchItem = async () => {

    try {

      const response = await API.get(
        `/items/${id}`
      );

      setFormData({

        title:
          response.data.title,

        description:
          response.data.description,

        category:
          response.data.category,

        location:
          response.data.location,

        status:
          response.data.status

      });

      setPreviewImage(
        response.data.image
      );

    } catch (error) {

      console.log(error);

    }

  };

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const itemData =
        new FormData();

      itemData.append(
        "title",
        formData.title
      );

      itemData.append(
        "description",
        formData.description
      );

      itemData.append(
        "category",
        formData.category
      );

      itemData.append(
        "location",
        formData.location
      );

      itemData.append(
        "status",
        formData.status
      );

      if (image) {

        itemData.append(
          "image",
          image
        );

      }

      await API.put(

        `/items/${id}`,

        itemData,

        {
          headers: {

            Authorization:
              `Bearer ${token}`,

            "Content-Type":
              "multipart/form-data"

          }
        }

      );

      navigate(
        `/item/${id}`
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",

        background:
          `
          radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 25%),
          radial-gradient(circle at bottom right, rgba(168,85,247,0.18), transparent 25%),
          linear-gradient(135deg, #020617, #0f172a, #111827)
          `,

        color: "white",

        padding: "60px 20px",

        fontFamily:
          "'Trebuchet MS', Arial, sans-serif"
      }}
    >

      <div
        style={{
          maxWidth: "820px",

          margin: "0 auto",

          background:
            "rgba(15,23,42,0.88)",

          backdropFilter:
            "blur(14px)",

          padding: "45px",

          borderRadius: "28px",

          border:
            "1px solid rgba(255,255,255,0.08)",

          boxShadow:
            "0 20px 45px rgba(0,0,0,0.45)"
        }}
      >

        <button

          onClick={() =>
            navigate(-1)
          }

          style={{
            marginBottom: "25px",

            background:
              "rgba(255,255,255,0.05)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            color: "#cbd5e1",

            padding: "10px 18px",

            borderRadius: "12px",

            fontSize: "15px",

            cursor: "pointer",

            transition: "0.3s"
          }}
        >

          ← Back

        </button>

        <h1
          style={{
            marginBottom: "12px",

            fontSize: "48px",

            fontWeight: "bold",

            background:
              "linear-gradient(to right, #60a5fa, #a855f7)",

            WebkitBackgroundClip:
              "text",

            WebkitTextFillColor:
              "transparent"
          }}
        >

          Edit Item

        </h1>

        <p
          style={{
            color: "#94a3b8",

            marginBottom: "35px",

            fontSize: "17px",

            lineHeight: "28px"
          }}
        >

          Update your lost or found item details and keep the information accurate.

        </p>

        <form onSubmit={handleSubmit}>

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "1fr 1fr",

              gap: "20px",

              marginBottom: "20px"
            }}
          >

            <input
              type="text"
              name="title"
              placeholder="Item Title"
              value={formData.title}
              onChange={handleChange}

              style={{
                width: "100%",

                padding: "16px",

                borderRadius: "16px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                backgroundColor:
                  "#111827",

                color: "white",

                fontSize: "15px",

                outline: "none"
              }}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}

              style={{
                width: "100%",

                padding: "16px",

                borderRadius: "16px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                backgroundColor:
                  "#111827",

                color: "white",

                fontSize: "15px",

                outline: "none"
              }}
            />

          </div>

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}

            style={{
              width: "100%",

              padding: "18px",

              marginBottom: "20px",

              borderRadius: "18px",

              border:
                "1px solid rgba(255,255,255,0.08)",

              backgroundColor:
                "#111827",

              color: "white",

              minHeight: "170px",

              fontSize: "15px",

              outline: "none",

              resize: "vertical",

              lineHeight: "28px"
            }}
          />

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "1fr 1fr",

              gap: "20px",

              marginBottom: "25px"
            }}
          >

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}

              style={{
                width: "100%",

                padding: "16px",

                borderRadius: "16px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                backgroundColor:
                  "#111827",

                color: "white",

                fontSize: "15px",

                outline: "none"
              }}
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}

              style={{
                width: "100%",

                padding: "16px",

                borderRadius: "16px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                backgroundColor:
                  "#111827",

                color: "white",

                fontSize: "15px",

                outline: "none",

                cursor: "pointer"
              }}
            >

              <option value="lost">
                Lost
              </option>

              <option value="found">
                Found
              </option>

              <option value="claimed">
                Claimed
              </option>

            </select>

          </div>

          {
            previewImage && (

              <div
                style={{
                  marginBottom: "25px"
                }}
              >

                <p
                  style={{
                    marginBottom: "12px",

                    color: "#cbd5e1",

                    fontWeight: "bold"
                  }}
                >
                  Current Image
                </p>

                <img
                  src={previewImage}
                  alt="Preview"

                  style={{
                    width: "100%",

                    maxHeight: "360px",

                    objectFit: "contain",

                    borderRadius: "20px",

                    backgroundColor:
                      "#020617",

                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    padding: "10px"
                  }}
                />

              </div>

            )
          }

          <div
            style={{
              marginBottom: "35px"
            }}
          >

            <label
              style={{
                display: "block",

                marginBottom: "12px",

                color: "#cbd5e1",

                fontWeight: "bold"
              }}
            >

              Upload New Image

            </label>

            <input
              type="file"
              accept="image/*"

              onChange={(e) => {

                const file =
                  e.target.files[0];

                if (!file) return;

                setImage(file);

                setPreviewImage(

                  URL.createObjectURL(
                    file
                  )

                );

              }}

              style={{
                color: "#cbd5e1"
              }}
            />

          </div>

          <button
            type="submit"

            disabled={loading}

            style={{
              width: "100%",

              padding: "17px",

              border: "none",

              borderRadius: "18px",

              background:
                "linear-gradient(to right, #2563eb, #7c3aed)",

              color: "white",

              cursor: "pointer",

              fontWeight: "bold",

              fontSize: "17px",

              boxShadow:
                "0 8px 25px rgba(37,99,235,0.35)",

              transition: "0.3s",

              opacity:
                loading ? 0.7 : 1
            }}
          >

            {
              loading
                ? "Saving Changes..."
                : "Save Changes"
            }

          </button>

        </form>

      </div>

    </div>

  );

}

export default EditItem;