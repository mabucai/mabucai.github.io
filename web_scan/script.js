const accessForm = document.querySelector("#accessForm");
const formNote = document.querySelector("#formNote");

accessForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(accessForm);
  const name = String(formData.get("userName") || "").trim();
  const caseId = String(formData.get("caseId") || "").trim();

  if (!name || !caseId) {
    formNote.textContent = "请填写姓名和病历号。";
    return;
  }

  formNote.textContent = `${name} · 病历号 ${caseId} 已提交查询。`;
});
