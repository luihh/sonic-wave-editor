import CodeArea from './components/CodeArea';
import Sidebar from './components/Sidebar';
import Titlebar from './components/Titlebar';
import { SourceProvider } from './context/SourceContext';

export default function App() {
  return (
    <div className="wrapper">
      <Titlebar />
      <div
        id="editor"
        className="h-screen flex items-start overflow-hidden bg-primary-100"
      >
        <SourceProvider>
          <Sidebar />
          <CodeArea />
        </SourceProvider>
      </div>
    </div>
  );
}
