import React from "react";
import UnorderedList from "./UnorderedList";
import TitleArticle from "./TitleArticle";

export default function ArticleComponent({
  titleArticle,
  stylingID,
  filteredNotes,
  status,
  showFormattedDate,
  popupDelete,
  onArchiveHandler,
  btnRemove,
  name
}) {
  return (
    <article className="article-container">
      <TitleArticle titleArticle={titleArticle}/>
      <div id={stylingID}>
      <UnorderedList
        status={status}
        filteredNotes={filteredNotes} 
        showFormattedDate={showFormattedDate}
        popupDelete={popupDelete}
        onArchiveHandler={onArchiveHandler}
        btnRemove={btnRemove}
        name={name}
      /> 
      </div>
    </article>
  ) 
};