import { useMemo, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

interface Props {
  handleChange: (value: string) => void;
  placeholder?: string;
  value: string;
  name?: string;
}

interface IQuill {
  getEditor(): {
    insertEmbed(value: number, type: string, link: string): void;
    getSelection: (value: boolean) => { index: number };
    deleteText(value: number, end: number): void;
    setSelection(value: number, end: number): void;
    insertText(value: number, type: string, link: string): void;
  };
}

const QuillEditor = ({ handleChange, placeholder, value = '', name }: Props) => {
  const ref = useRef<IQuill>(null);

  // const { mutateAsync } = useUploadFile();

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          { header: [1, 2, 3, 4, 5, 6, false] },
          'bold',
          'italic',
          'underline',
          'blockquote',

          { align: 'center' },
          { align: 'justify' },
          { align: '' },
          { align: 'right' },
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
      },
    }),
    [],
  );

  const formats = useMemo(
    () => [
      'bold',
      'italic',
      'underline',
      'blockquote',
      'link',
      'list',
      'bullet',
      'indent',
      'center',
      'justify',
      'left',
      'right',
    ],
    [],
  );

  return (
    <ReactQuill
      onChange={handleChange}
      placeholder={placeholder}
      modules={modules}
      formats={formats}
      value={value}
      theme="snow"
      id="ql-editor"
      ref={ref}
      name={name}
    />
  );
};

export default QuillEditor;
