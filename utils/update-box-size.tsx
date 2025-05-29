export const updateBoxSize = (ref: React.RefObject<HTMLDivElement>) => {
  if (!ref.current) return { left: 0, top: 0, right: 0, bottom: 0 }; // Handle null safely

  const { left, top, right, bottom } = ref.current.getBoundingClientRect();
  return { left, top, right, bottom };
};
