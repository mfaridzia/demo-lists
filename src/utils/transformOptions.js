export function transformSize (option_size = []) {
  return option_size?.map(item => ({ value: item.size, label: item.size }));
}

export function transformArea (option_area = []) {
  return option_area?.map(item => ({
    value: item.province + ', ' + item.city,
    label: item.province + ', ' + item.city
  }));
}