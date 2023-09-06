'use client';

import { useState } from 'react';
import { Divider, NumberInput, Switch, Textarea } from '@mantine/core';
import { openModal } from '@mantine/modals';
import WorkspaceUserSelector from '../../../../../../components/selectors/WorkspaceUserSelector';
import { Product } from '../../../../../../types/primitives/Product';
import InvoiceCreateModal from '../../../../../../components/loaders/invoices/InvoiceCreateModal';
import InvoiceProductInput from '../../../../../../components/inputs/InvoiceProductInput';
import { useLocalStorage } from '@mantine/hooks';
import 'dayjs/locale/vi';
import WalletSelector from '../../../../../../components/selectors/WalletSelector';
import { Wallet } from '../../../../../../types/primitives/Wallet';
import TransactionCategorySelector from '../../../../../../components/selectors/TransactionCategorySelector';
import { TransactionCategory } from '../../../../../../types/primitives/TransactionCategory';
import { DateTimePicker } from '@mantine/dates';
import 'dayjs/locale/vi';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  params: {
    wsId: string;
  };
}

export default function NewInvoicePage({ params: { wsId } }: Props) {
  const { t } = useTranslation('invoices');

  const [walletId, setWalletId] = useLocalStorage<string>({
    key: 'invoice-new-wallet-id',
    defaultValue: '',
  });

  const [categoryId, setCategoryId] = useLocalStorage<string>({
    key: 'invoice-new-category-id',
    defaultValue: '',
  });

  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [category, setCategory] = useState<TransactionCategory | null>(null);

  const [userId, setUserId] = useState<string>('');
  const [takenAt, setTakenAt] = useState<Date>(new Date());
  const [notice, setNotice] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const [diff, setDiff] = useState<number>(0);

  const [products, setProducts] = useState<Product[]>([]);

  const allProductsValid = () =>
    products.every(
      (product) =>
        product.id.length > 0 && product?.amount && product?.price !== undefined
    );

  const hasRequiredFields = () =>
    products.length > 0 &&
    allProductsValid() &&
    walletId.length > 0 &&
    categoryId.length > 0;

  const addEmptyProduct = () => {
    setProducts((products) => [
      ...products,
      {
        id: '',
      },
    ]);
  };

  const getUniqueWarehouseIds = () => {
    const ids = new Set<string>();
    (products || []).forEach((product) =>
      ids.add(`${product.id}::${product.unit_id}`)
    );
    return Array.from(ids);
  };

  const removePrice = (index: number) =>
    setProducts((products) => (products || []).filter((_, i) => i !== index));

  const updateProduct = (index: number, product: Product) =>
    setProducts((products) =>
      products.map((p, i) => (i === index ? product : p))
    );

  const amount = products.reduce(
    (acc, product) => acc + (product?.amount || 0),
    0
  );

  const price = products.reduce(
    (acc, product) => acc + (product?.price || 0) * (product?.amount || 0),
    0
  );

  const [closeOrderAfterCreate, setCloseOrderAfterCreate] = useLocalStorage({
    key: 'finance-invoices-closeOrderAfterCreate',
    defaultValue: true,
  });

  const showCreateModal = () => {
    openModal({
      title: <div className="font-semibold">{t('create-invoice')}</div>,
      centered: true,
      closeOnEscape: false,
      closeOnClickOutside: false,
      withCloseButton: false,
      children: (
        <InvoiceCreateModal
          wsId={wsId}
          invoice={{
            customer_id: userId,
            price,
            total_diff: diff,
            completed_at: closeOrderAfterCreate ? 'now()' : undefined,
            notice: notice || '',
            note: note || '',
          }}
          transaction={{
            wallet_id: walletId,
            category_id: categoryId,
            amount: price + diff,
            taken_at: takenAt.toISOString(),
          }}
          products={products}
        />
      ),
    });
  };

  const { lang } = useTranslation();

  return (
    <div className="mt-2 flex min-h-full w-full flex-col ">
      <div className="grid gap-x-8 gap-y-4 xl:grid-cols-2 xl:gap-x-16">
        <Switch
          label={t('close-order-after-create')}
          checked={closeOrderAfterCreate}
          onChange={(event) =>
            setCloseOrderAfterCreate(event.currentTarget.checked)
          }
        />
        <div className="flex items-end justify-end">
          <button
            className={`rounded border border-blue-300/10 bg-blue-300/10 px-4 py-1 font-semibold text-blue-300 transition ${
              hasRequiredFields()
                ? 'hover:bg-blue-300/20'
                : 'cursor-not-allowed opacity-50'
            }`}
            onClick={hasRequiredFields() ? showCreateModal : undefined}
          >
            {t('create')}
          </button>
        </div>
      </div>

      <Divider className="my-4" />
      <div className="grid gap-x-8 gap-y-4 xl:grid-cols-4 xl:gap-x-16">
        <div className="grid h-fit gap-x-4 gap-y-2 md:grid-cols-2">
          <div className="col-span-full">
            <div className="text-2xl font-semibold">{t('basic-info')}</div>
            <Divider className="my-2" variant="dashed" />
          </div>

          <WorkspaceUserSelector
            userId={userId}
            setUserId={setUserId}
            className="col-span-full"
            required
          />

          <DateTimePicker
            value={takenAt}
            label={t('time')}
            onChange={(date) => setTakenAt(date || new Date())}
            className="col-span-full"
            classNames={{
              input: 'dark:bg-[#25262b]',
            }}
            valueFormat="HH:mm - dddd, DD/MM/YYYY"
            locale={lang}
          />

          <Divider className="col-span-full my-2" />

          {notice != null ? (
            <Textarea
              label={t('notice')}
              placeholder={t('notice-placeholder')}
              value={notice}
              onChange={(e) => setNotice(e.currentTarget.value)}
              className="md:col-span-2"
              minRows={5}
              classNames={{
                input: 'bg-white/5 border-zinc-300/20 font-semibold',
              }}
            />
          ) : (
            <button
              className="rounded border border-blue-500/10 bg-blue-500/10 px-4 py-2 font-semibold text-blue-600 transition hover:bg-blue-500/20 dark:border-blue-300/10 dark:bg-blue-300/10 dark:text-blue-300 dark:hover:bg-blue-300/20 md:col-span-2"
              onClick={() => setNotice('')}
            >
              + {t('add-notice')}
            </button>
          )}

          {note != null ? (
            <Textarea
              label={t('note')}
              placeholder={t('note-placeholder')}
              value={note}
              onChange={(e) => setNote(e.currentTarget.value)}
              className="md:col-span-2"
              minRows={5}
              classNames={{
                input: 'bg-white/5 border-zinc-300/20 font-semibold',
              }}
            />
          ) : (
            <button
              className="rounded border border-blue-500/10 bg-blue-500/10 px-4 py-2 font-semibold text-blue-600 transition hover:bg-blue-500/20 dark:border-blue-300/10 dark:bg-blue-300/10 dark:text-blue-300 dark:hover:bg-blue-300/20 md:col-span-2"
              onClick={() => setNote('')}
            >
              + {t('add-note')}
            </button>
          )}

          <Divider className="col-span-full my-2" />

          <WalletSelector
            walletId={walletId}
            wallet={wallet}
            setWallet={(w) => {
              setWallet(w);
              setWalletId(w?.id || '');
            }}
            className="col-span-full"
            preventPreselected
            hideBalance
            required
          />

          <TransactionCategorySelector
            categoryId={categoryId}
            category={category}
            setCategory={(c) => {
              setCategory(c);
              setCategoryId(c?.id || '');
            }}
            className="col-span-full"
            isExpense={false}
            preventPreselected
            required
          />

          {products?.length > 0 && (
            <div className="col-span-full">
              <NumberInput
                label={t('total')}
                placeholder={t('total-placeholder')}
                value={price + (diff || 0)}
                onChange={(e) => setDiff((e || 0) - price)}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '') || ''}
                formatter={(value) =>
                  !Number.isNaN(parseFloat(value || ''))
                    ? (value || '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    : ''
                }
              />

              {diff != 0 && (
                <>
                  <button
                    className="mt-2 w-full rounded border border-red-500/10 bg-red-500/10 px-4 py-2 font-semibold text-red-600 transition hover:bg-red-500/20 dark:border-red-300/10 dark:bg-red-300/10 dark:text-red-300 dark:hover:bg-red-300/20 md:col-span-2"
                    onClick={() => setDiff(0)}
                  >
                    {t('reset')}
                  </button>
                  <Divider className="my-2" />
                  <div className="my-2 rounded border border-orange-500/10 bg-orange-500/10 p-2 text-center font-semibold text-orange-400 dark:border-orange-300/10 dark:bg-orange-300/10 dark:text-orange-300">
                    {diff > 0 ? t('extra-pay') : t('discount')}{' '}
                    <span className="text-orange-600 underline decoration-orange-600 underline-offset-4 dark:text-orange-100 dark:decoration-orange-100">
                      {Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(Math.abs(diff))}
                    </span>{' '}
                    {t('for-this-invoice')}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="grid h-fit gap-x-4 gap-y-2 xl:col-span-3">
          <div className="col-span-full">
            <div className="text-2xl font-semibold">
              {t('products')}{' '}
              {products?.length > 0 && (
                <>
                  (
                  <span className="text-blue-600 dark:text-blue-300">
                    x
                    {Intl.NumberFormat('vi-VN', {
                      style: 'decimal',
                    }).format(products?.length || 0)}
                  </span>{' '}
                  {amount != 0 && (
                    <>
                      |{' '}
                      <span className="text-purple-600 dark:text-purple-300">
                        x
                        {Intl.NumberFormat('vi-VN', {
                          style: 'decimal',
                        }).format(amount)}
                      </span>{' '}
                    </>
                  )}
                  |{' '}
                  <span className="text-green-600 dark:text-green-300">
                    {Intl.NumberFormat('vi-VN', {
                      style: 'currency',
                      currency: 'VND',
                    }).format(price)}
                  </span>
                  {diff != null && diff != 0 && (
                    <>
                      {diff > 0 ? ' + ' : ' - '}{' '}
                      <span className="text-red-600 dark:text-red-300">
                        {Intl.NumberFormat('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                        }).format(Math.abs(diff))}
                      </span>
                      {' = '}
                      <span className="text-yellow-600 dark:text-yellow-300">
                        {Intl.NumberFormat('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                        }).format(
                          products.reduce(
                            (a, b) => a + (b?.amount || 0) * (b?.price || 0),
                            0
                          ) + (diff || 0)
                        )}
                      </span>
                    </>
                  )}
                  )
                </>
              )}
            </div>
            <Divider className="mb-4 mt-2" variant="dashed" />

            <button
              className="rounded border border-blue-500/10 bg-blue-500/10 px-4 py-1 font-semibold text-blue-600 transition hover:bg-blue-500/20 dark:border-blue-300/10 dark:bg-blue-300/10 dark:text-blue-300 dark:hover:bg-blue-300/20"
              onClick={addEmptyProduct}
            >
              + {t('add-product')}
            </button>
          </div>

          <div className="mt-4 grid gap-4">
            {products.map((p, idx) => (
              <InvoiceProductInput
                key={p.id + idx}
                wsId={wsId}
                product={p}
                isLast={idx === products.length - 1}
                getUniqueWarehouseIds={getUniqueWarehouseIds}
                removePrice={() => removePrice(idx)}
                updateProduct={(product) => updateProduct(idx, product)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}