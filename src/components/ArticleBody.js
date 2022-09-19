import React from "react";

export default function ArticleBody({
  title,
  createdAt,
  body,
  id,
  onDelete,
  onArchive,
  btnDelete,
  btnName
}) {
  return (
    <li className="todo stack-small">
      <div className="Contact-item-body">
        <h3 className="title-article">{title}</h3>
        <h4 className="date-article">{createdAt}</h4>
        <p className="text-article">{body}</p>
      </div>
      <div className="btn-group">
        <button 
          type="button"
          className="btn-delete btn-circle"
          onClick= {() => onDelete(id)}>
          {btnDelete}
        </button>
        <button 
          type="button"
          className="btn-archive btn-circle"
          onClick={() => onArchive(id)}>
          {btnName} 
        </button>
      </div>
    </li>
  );
};
