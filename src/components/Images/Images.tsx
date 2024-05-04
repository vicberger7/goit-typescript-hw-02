import { getImages } from "../services/api";
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton";
import { SearchBar } from "../SearchBar/SearchBar";
import { Loader } from "../Loader/Loader";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { useEffect, useState, FC } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { ImageModal } from "../ImageModal/ImageModal";
import { ImageData } from "../services/api";
import Modal from "react-modal";

interface ImagesState {
  selectedImage?: ImageData | null;
  query?: string;
  page?: number;
  pictures?: ImageData[];
  total?: number;
  error?: string | null;
  isLoading?: boolean;
}

export const Images: FC<ImagesState> = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [pictures, setImages] = useState<ImageData[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onSearch = (value: string) => {
    setImages([]);
    setPage(1);
    setTotal(0);
    setQuery(value.trim());
    setError(null);
  };

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const imageData = await getImages(query, page);
        setImages(imageData);
        setTotal(imageData.length);
      } catch (error) {
        setError((error as Error).message );
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onClick = () => {
    setPage(page + 1);
  };

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {error && <ErrorMessage message={`Error: ${error}`} />}
      <ImageGallery images={pictures} onImageClick={handleImageClick} />
      {pictures.length > 0 && total > pictures.length && (
        <LoadMoreButton onClick={onClick}>View more</LoadMoreButton>
      )}
      {pictures.length === 0 && query !== "" && !error && (
        <p>sorry by your queries {query} nothing was found</p>
      )}
      {selectedImage && (
        <ImageModal
          isOpen={selectedImage !== null}
          onClose={handleCloseModal}
          urls={selectedImage.urls}
          alt_description={selectedImage.alt_description}
        />
      )}
      {error && <p>sorry there is an error {error}</p>}
        {isLoading && <Loader color={""} loading={false} />}  
    </>
  );
};
