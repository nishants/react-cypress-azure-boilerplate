import React from 'react';

export default ({
  imgSrc,
  title,
  subTitle,
  boldText,
  quantityAdded,
  badgeText
}) => {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={title} />
      <div className="product-card__title">{title}</div>
      <div className="product-card__subtitle">{subTitle}</div>
      <div className="product-card__boldtext">{boldText}</div>
      <div className="product-card__additem"> ADD </div>
      <div className="product-card__changequantity">{quantityAdded}</div>
      <div className="product-card__badgetext">{badgeText}</div>
    </div>
  );
};
