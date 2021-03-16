import { useState } from 'react';

import { SideBar, GenreResponseProps } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  function setGenre(genre: GenreResponseProps) {
    setSelectedGenre(genre);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar setGenre={setGenre} />
      <Content selectedGenre={selectedGenre} />
    </div>
  );
}
