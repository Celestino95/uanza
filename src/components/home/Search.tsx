import { useState, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';

interface Props {
  onSearch: (value: string) => void;
}

export const Search = ({ onSearch }: Props) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation('common');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch(newValue); // Chama onSearch enquanto digita
  };

  const handleClearInput = () => {
    setValue('');
    if (inputRef.current) inputRef.current.focus();
  };

  const showClearButton = !!value;

  return (
    <form
      className="relative flex h-10 w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl content-between items-center px-4 sm:px-0"
      onSubmit={(e) => e.preventDefault()} // Previne o comportamento padrão do formulário
    >
      <input
        className="h-full w-full rounded-lg border border-solid border-1 bg-neutral-100 p-2.5 pr-12 text-neutral-900 placeholder-neutral-500 outline-none transition-colors focus:border-violet-500"
        type="text"
        name="search"
        id="search"
        placeholder={`${t('Pesquisar...')}`}
        aria-label="Search"
        value={value}
        ref={inputRef}
        onChange={handleChange} // Chama handleChange no evento onChange
      />
      {showClearButton ? (
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-full w-[30px] cursor-pointer text-neutral-500"
          aria-label="Clear search input"
          onClick={handleClearInput}
        >
          <FiX size="1.25rem" />
        </button>
      ) : (
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-full w-[30px] cursor-pointer text-neutral-500"
          aria-label="Submit search"
        >
          <FiSearch size="1.25rem" />
        </button>
      )}
    </form>
  );
};
