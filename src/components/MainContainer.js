import React, {useState} from "react";
import Header from "./Header";
import Main from "./MainComponent";
import ArticleComponent from "./ArticleComponent";
import Form from "./Form";
import { getInitialData, showFormattedDate } from "../utils";

const btnRemove = <i className="fa fa-trash"></i>;
const btnUndo = <i className="fa fa-undo"></i>;
const btnArchive = <i className="fa fa-file"></i>;

export default function MainContainer() {
  const [article, setArticle] = useState(getInitialData());
  const [search, setSearch] = useState("");

  let filteredNotes = article.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  function addNewBook(title, textArea) {
    const newArticle = {
      id: +new Date(),
      title: title,
      createdAt: new Date(),
      body: textArea,
      archived: false
    };

    setArticle([...article, newArticle]);
  }

  function onArchiveHandler(id) {
    let update = article.map((item) => {
      if (item.id === id) {
        item.archived = !item.archived;
      }

      return item;
    });

    setArticle([...update]);
  }

  function popupDelete(id) {
    const confirmBox = window.confirm("Do you really want to delete this Item");

    if (confirmBox) {
      return deleteTask(id);
    } else {
      return;
    }
  }

  function deleteTask(id) {
    const deleteItem = article.filter((item) => id !== item.id);
    setArticle(deleteItem);
  }

  return (
    <React.Fragment>
      <Header
        search={search} 
        setSearch={setSearch}
      />
      <Main>
        <Form addTitle={addNewBook} />
        <ArticleComponent
          titleArticle='Active'
          stylingID='completed'
          filteredNotes={filteredNotes}
          status={false}
          showFormattedDate={showFormattedDate}
          popupDelete={popupDelete}
          onArchiveHandler={onArchiveHandler}
          btnRemove={btnRemove}
          name={btnArchive}
        />
        <ArticleComponent
          titleArticle='Archive'
          stylingID='uncompleted'
          filteredNotes={filteredNotes}
          status={true}
          showFormattedDate={showFormattedDate}
          popupDelete={popupDelete}
          onArchiveHandler={onArchiveHandler}
          btnRemove={btnRemove}
          name={btnUndo}
        />
      </Main>
    </React.Fragment>
  );
}
