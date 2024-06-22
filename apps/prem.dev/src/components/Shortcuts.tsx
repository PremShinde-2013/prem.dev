// import { useEffect, useRef } from 'react';
// import { toast } from 'react-hot-toast';

// import Toast from '@/components/Toast';

// import useFocusMode from '@/hooks/useFocusMode';
// import useGlobal from '@/hooks/useGlobal';
// import useShortcut from '@/hooks/useShortcut';
// import useTheme from '@/hooks/useTheme';

// const focusToast = {
//   title: 'Focus Turned {STATUS}',
//   message:
//     'Focus helps reduce distractions by hiding floating components, like navigation and reactions.',
// };

// function Shortcuts() {
//   const toastRef = useRef(null);
//   const { theme, setTheme } = useTheme();
//   const { isQuickAccessOpen, setQuickAccessOpen } = useGlobal();
//   const { focusMode, setFocusMode } = useFocusMode();

//   useShortcut('KeyD', () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   });

//   useShortcut('KeyQ', () => {
//     setQuickAccessOpen(!isQuickAccessOpen);
//   });

//   useShortcut('KeyF', () => {
//     setFocusMode(!focusMode);
//   });

//   useEffect(() => {
//     if (toastRef.current) {
//       toast.remove(toastRef.current.id);
//     }
//     if (focusMode) {
//       toastRef.current = toast.custom((t) => (
//         <Toast
//           title={focusToast.title.replace('{STATUS}', 'On')}
//           message={focusToast.message}
//           t={t}
//         />
//       ));
//     } else {
//       toastRef.current = toast.custom((t) => (
//         <Toast
//           title={focusToast.title.replace('{STATUS}', 'Off')}
//           message={focusToast.message}
//           t={t}
//         />
//       ));
//     }
//   }, [focusMode]);

//   return null;
// }

// export default Shortcuts;

import { useEffect, useRef } from 'react';
import { toast, ToastId } from 'react-hot-toast';

import Toast from '@/components/Toast';

import useFocusMode from '@/hooks/useFocusMode';
import useGlobal from '@/hooks/useGlobal';
import useShortcut from '@/hooks/useShortcut';
import useTheme from '@/hooks/useTheme';

const focusToast = {
  title: 'Focus Turned {STATUS}',
  message:
    'Focus helps reduce distractions by hiding floating components, like navigation and reactions.',
};

function Shortcuts() {
  const toastRef = useRef<ToastId | null>(null);
  const { theme, setTheme } = useTheme();
  const { isQuickAccessOpen, setQuickAccessOpen } = useGlobal();
  const { focusMode, setFocusMode } = useFocusMode();

  const isFormElementFocused = () => {
    const activeElement = document.activeElement as HTMLElement | null;
    return (
      activeElement &&
      (activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        activeElement.isContentEditable)
    );
  };

  useShortcut('KeyD', () => {
    if (!isFormElementFocused()) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  });

  useShortcut('KeyQ', () => {
    if (!isFormElementFocused()) {
      setQuickAccessOpen(!isQuickAccessOpen);
    }
  });

  useShortcut('KeyF', () => {
    if (!isFormElementFocused()) {
      setFocusMode(!focusMode);
    }
  });

  useEffect(() => {
    if (toastRef.current) {
      toast.remove(toastRef.current);
    }

    toastRef.current = toast.custom((t) => (
      <Toast
        title={focusToast.title.replace('{STATUS}', focusMode ? 'On' : 'Off')}
        message={focusToast.message}
        t={t}
      />
    ));

    return () => {
      if (toastRef.current) {
        toast.remove(toastRef.current);
      }
    };
  }, [focusMode]);

  return null;
}

export default Shortcuts;
