import HistoryItem from '../HistoryItem';
import React from 'react'
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';

describe("HistoryItem component", () => {
    test('renders HistoryItem component', () => {
        const item = render(<HistoryItem />);
        expect(item).toBeTruthy()
    });
})y