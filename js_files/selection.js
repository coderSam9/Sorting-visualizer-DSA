async function selectionSort() {
  var i, j, min_id;

  for (i = 0; i < size - 1; i++) {
    await sleep(delay);

    min_id = i;
    setColor(min_id, SELECTED);

    for (j = i + 1; j < size; j++) {
      await sleep(delay);

      setColor(j, COMPARE);

      await sleep(delay);

      if (arr[j] < arr[min_id]) {
        setColor(min_id, UNSORTED);
        min_id = j;
        setColor(min_id, SELECTED);
        await sleep(delay);
      } else setColor(j, UNSORTED);
    }

    await sleep(delay);

    if (min_id != i) {
      setColor(i, COMPARE);
      await sleep(delay);

      setColor(min_id, COMPARE);
      setColor(i, SELECTED);
      swap(min_id, i);
      await sleep(delay);
    }

    setColor(min_id, UNSORTED);
    setColor(i, SORTED);
  }

  setColor(size - 1, SORTED);
}
