import React from "react";

export default function CreateIDE() {
  return (
    <div>
      <div className="editor" id="editor" style={{ width: "600px" }}></div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="./../../library/ui/js/lib/ace.js"></script>
      <script src="./../../library/ui/js/lib/theme-monokai.js"></script>
      <script src="./../../library/ui/js/ide.js"></script>
    </div>
  );
}
