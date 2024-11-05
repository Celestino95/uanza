import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { FiX } from 'react-icons/fi';
import { Collections } from '@/types';
import { NavLink } from '@/components';
import { Accordion } from '@/components/ui';

interface Props {
  navLinks: NavLink[];
  collections: Collections;
  onPageClose: () => void;
}

export const CollectionsPage = ({
  navLinks,
  collections,
  onPageClose,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-0 left-0 top-0 z-50 h-full w-full overflow-y-auto bg-white px-5 pt-5">
      <div className="flex justify-between">
        <h2 className="text-xl font-medium">{t('Menu')}</h2>
        <FiX
          className="cursor-pointer"
          size="1.5rem"
          data-testid="close"
          onClick={onPageClose}
        />
      </div>
      <ul className="mt-5 flex flex-col px-2">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="border-b border-solid border-neutral-100 font-medium text-neutral-800"
          >
            {item.collapsible ? (
              <Accordion>
                <Accordion.Header>{t(`header:${item.name}`)}</Accordion.Header>
                <Accordion.Body className="px-2 text-sm">
                  <ul>
                    {collections &&
                      collections.map(collection => (
                        <li
                          key={collection.id}
                          className="block border-b border-solid border-neutral-100"
                        >
                          <Accordion>
                            <Accordion.Header>
                              {collection.name}
                            </Accordion.Header>
                            <Accordion.Body className="px-2 text-xs">
                              {/* Conteúdo adicional */}
                            </Accordion.Body>
                          </Accordion>
                        </li>
                      ))}
                  </ul>
                </Accordion.Body>
              </Accordion>
            ) : (
              <Link
                href={`/${item.name.toLowerCase()}`} // Rotas baseadas no nome
                className="block py-4"
                onClick={onPageClose}
              >
                <h3>{t(`${item.name}`)}</h3>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
