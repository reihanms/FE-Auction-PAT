import React from "react";
import { BuyItem } from "../Component/BuyItem";
import { useParams } from "react-router-dom";

export const BuyItemPage = () => {
  const { id } = useParams();

  return <BuyItem id={id} />;
};
