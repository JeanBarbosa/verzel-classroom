/* https://pt.stackoverflow.com/questions/438262/abreviar-nomes-com-javascript */

const toAbridged = (fullName: string) => {
  const token = '.';
  const separator = ' ';
  const names = removePrepositions(fullName).split(separator);
  const firstName = names[0];
  let surnames = '';
  names
    .filter((name: string, index) => index)
    .map((name: string, index: number) => {
      if (index <= 0)
        return surnames += `${separator}${name.charAt(0)}${token}`

      return '';
    }
    );
  return `${firstName}${surnames.toUpperCase()}`;
}

const removePrepositions = (fullName: string) => {
  return fullName.replace(/ dos| das| dos| das| de| d'/gi, '');
}

export const abridgedControl = (fullName: string, limit: number) => {
  if (fullName.length > limit) {
    return toAbridged(fullName);
  }

  return fullName;
}
