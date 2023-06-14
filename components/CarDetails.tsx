import { carCardProps } from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: carCardProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return <></>;
};
export default CarDetails;
