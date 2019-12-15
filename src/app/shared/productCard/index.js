import React from 'react';

const Inrementor = ({ value, onIncrease, onDecrease }) => (
  <div className="product-card__changequantity">
    <span className="increment fas fa-plus" onClick={onIncrease} />
    {value}
    <span className="decrement fas fa-minus" onClick={onDecrease} />
  </div>
);

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

      {quantityAdded ? (
        <Inrementor value={quantityAdded} />
      ) : (
        <div className="product-card__additem"> ADD </div>
      )}
      {badgeText && <div className="product-card__badgetext">{badgeText}</div>}
    </div>
  );
};
