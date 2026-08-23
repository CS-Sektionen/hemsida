import { Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop';
import { Layout} from './components/Layout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Companies } from './pages/Companies';
import { Undergrupper } from './pages/Undergrupper';
import { Aktiviteter } from './pages/Aktiviteter';
import { Sektionsmote } from './pages/Sektionsmote';
import { NewStudents } from './pages/NewStudents';
import { Styrelsen } from './pages/Styrelsen';
import { Dokument } from './pages/Dokument';
import { Kalender } from './pages/Kalender';

function App() {
  useScrollToTop();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/foretag" element={<Companies />} />
        <Route path="/aktiviteter" element={<Aktiviteter />} />
        <Route path="/sektionsmote" element={<Sektionsmote />} />
        <Route path="/nystudent" element={<NewStudents />} />
        <Route path="/styrelsen" element={<Styrelsen />} />
        <Route path="/dokument" element={<Dokument />} />
        <Route path="/kalender" element={<Kalender />} />
        <Route path="/undergrupper" element={<Undergrupper />} />
      </Route>
    </Routes>
  );
}

export default App;
