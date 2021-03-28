import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value; // "add todo"に入力した情報を取得
  document.getElementById("add-text").value = ""; // Addボタンをクリックしたらinputエリアのテキストを空にする

  createIncompleteList(inputText);
};

// TODOsから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target); // 要素の削除
};

// 未完了リスト(TODOs)に追加
const createIncompleteList = (text) => {
  // li 作成
  const li = document.createElement("li");
  li.className = "list-row"; // "list-row"というクラス付与

  // p (リストテキスト生成)
  const p = document.createElement("p");
  p.className = "list-text"; // "list-text"というクラス付与
  p.innerText = text; // 入力したテキストを表示

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.className = "list-btn";
  completeButton.innerText = "Done";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親要素(li)をTODOsから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // Finished TODOsに追加する
    const addTarget = completeButton.parentNode;

    // TODO 内容テキスト取得
    const text = addTarget.firstChild.innerText;

    // li以下を取得
    addTarget.textContent = null; // 初期化

    const p = document.createElement("p");
    p.className = "list-text"; // "list-text"というクラス付与
    p.innerText = text; // 入力したテキストを表示

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "Undo";
    backButton.addEventListener("click", (target) => {
      // 押されたUndoボタンの親要素(li)をFinished TODOsから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // liタグの子要素に各要素を設定
    li.appendChild(p);
    li.appendChild(backButton);

    // 完了リスト(Finished TODOs)に追加
    const completeList = document.getElementById("complete-list");
    completeList.appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.className = "list-btn";
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素(li)をTODOsから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リスト(TODOs)に追加
  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.appendChild(li);
};

const add = document.getElementById("add-button");

add.addEventListener("click", onClickAdd);
