import { useEffect, useState } from 'react';
import type { DataIndex, File } from '../types/data';

export function useFiles() {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    fetch('/data/index.json')
      .then((res) => res.json())
      .then((data: DataIndex) => setFiles(data.files));
  }, []);

  return files;
}
