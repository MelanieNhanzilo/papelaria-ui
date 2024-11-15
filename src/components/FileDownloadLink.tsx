import { useRouter } from 'next/navigation';

const FileDownloadLink = ({ fileUrl, fileName }: {fileUrl: string, fileName:string}) => {
  const router = useRouter();

  const handleDownload = () => {
  };

  return (
    <a onClick={handleDownload} style={{ cursor: 'pointer' }}>
      Descarregar {fileName}
    </a>
  );
};

export default FileDownloadLink;