async function insertionSort() {
  var i, j, k;
  await sleep(delay);

  setColor(0, SELECTED);
  await sleep(delay);

  setColor(0, SORTED);

  for (i = 1; i < size; i++) {
    await sleep(delay);

    setColor(i, SELECTED);
    await sleep(delay);

    j = i - 1;
    k = arr[i];

    while (j >= 0 && arr[j] > k) {
      setColor(j, COMPARE);
      await sleep(delay);

      swap(j, j + 1);
      setColor(j, SELECTED);
      setColor(j + 1, COMPARE);
      await sleep(delay);

      setColor(j + 1, SORTED);
      await sleep(delay);

      j--;
    }

    setColor(j + 1, SORTED);
  }
}
