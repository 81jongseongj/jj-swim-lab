import { useState } from "react";

export default function AdminEditorPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 grid gap-6">
        <h1 className="text-2xl font-bold">📝 콘텐츠 에디터</h1>

        <div>
          <label className="block font-semibold mb-2">제목</label>
          <input
            type="text"
            className="w-full border rounded-xl p-3"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Markdown 내용</label>
          <textarea
            className="w-full min-h-[200px] border rounded-xl p-3 resize-y"
            placeholder="마크다운 형식으로 내용을 작성하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">이미지 업로드</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>

        <div>
          <label className="block font-semibold mb-2">미리보기</label>
          <div className="p-4 border bg-gray-50 rounded-xl min-h-[100px]">
            <p className="text-gray-600 italic">
              {content ? content : "여기에 작성한 내용이 미리보기로 표시됩니다"}
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
}
