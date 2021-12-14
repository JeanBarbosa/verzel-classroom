import React, { useRef, useState, useEffect, useCallback } from 'react';
import ReactSelect, {
  OptionTypeBase
} from 'react-select';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styles';

interface SProps {
  name: string;
  containerStyle?: React.CSSProperties;
  options?: Array<object>;
  icon?: React.ComponentType<IconBaseProps>;
  isMulti?: boolean;
  defaultValue?: any;
}

const Select: React.FC<SProps> = ({
  name, isMulti, containerStyle = {},
  icon: Icon, ...rest }) => {
  const selectRef = useRef<any>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!selectRef.current?.value);
  }, []);

  const selectStyle = {
    control: (provided: any) => {
      const customControlStyles = {
        color: "white",
        padding: '5px',
        border: '1px solid #111',
        borderColor: '#111',
        borderRadius: '8px'
      };

      return {
        ...provided,
        ...customControlStyles
      };
    }
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, isMulti]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
    >

      <ReactSelect
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        styles={selectStyle}
        ref={selectRef}
        defaultValue={defaultValue}
        classNamePrefix="react-select"
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Select;
