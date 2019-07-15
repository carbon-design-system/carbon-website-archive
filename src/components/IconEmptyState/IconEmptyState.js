import React, { Component } from 'react';
import { Button } from 'carbon-components-react';

class IconEmptyState extends Component {
  render() {
    return (
      <div className="icon-empty-state">
        <div className="icon-empty-state__container">
          <div className="icon-empty-state__shapes">
            <svg width="66" height="66">
              <g fill="none" fillRule="evenodd" stroke="#D1D7F4">
                <path d="M39.95417506 18.19893702l-5.06606193-1.54885057-3.87212639 12.66515473-12.66515473-3.87212638-1.54885057 5.06606193 12.66515474 3.87212638-3.87212636 12.66515464 5.06606193 1.54885057 3.87212636-12.66515464 12.66515464 3.87212636 1.54885056-5.06606193-12.66515463-3.87212636z" />
                <path d="M40.7436368 7.44559784c14.0258031 4.28811834 21.99299973 19.27223584 17.7048814 33.29803896-4.28811835 14.02580312-19.27223588 21.99299974-33.298039 17.7048814-14.02580312-4.28811835-21.9929997-19.27223587-17.70488136-33.298039C11.73371618 11.1246761 26.71783367 3.1574795 40.74363679 7.44559785zm1.55931575-5.10029203C25.47198885-2.8004362 7.49104781 6.76019974 2.34530581 23.59116345c-5.145742 16.8309637 4.41489393 34.81190474 21.24585764 39.95764674 16.8309637 5.145742 34.81190474-4.41489393 39.95764674-21.24585764 5.145742-16.8309637-4.41489393-34.81190474-21.24585764-39.95764674z" />
              </g>
            </svg>
            <svg width="62" height="65">
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#D1D7F4"
                transform="rotate(-17 25.91403275 57.1782927)">
                <path d="M32 0L0 56h64L32 0zm0 8l24 42.6666667H8L32 8z" />
                <path d="M29.8666667 22.4v4.2666667l1.0666666 10.6666666h2.1333334l1.0666666-10.6666666V22.4z" />
                <circle cx="32" cy="42.6666667" r="2.13333333" />
              </g>
            </svg>
            <svg width="52" height="72">
              <g
                fill="none"
                fillRule="evenodd"
                stroke="#D1D7F4"
                transform="rotate(73 24.85112992 27.55744523)">
                <path d="M41.05200631 47.24372504l6.1545984-6.1545984 14.30039044 14.30039044-6.1545984 6.1545984z" />
                <circle cx="40.96" cy="40.96" r="2.56" />
                <path d="M21.76 5.12c9.216 0 16.64 7.424 16.64 16.64 0 9.216-7.424 16.64-16.64 16.64-9.216 0-16.64-7.424-16.64-16.64 0-9.216 7.424-16.64 16.64-16.64zm0-5.12C9.728 0 0 9.728 0 21.76c0 12.032 9.728 21.76 21.76 21.76 12.032 0 21.76-9.728 21.76-21.76C43.52 9.728 33.792 0 21.76 0z" />
              </g>
            </svg>
            <svg width="70" height="71">
              <g fill="none" fillRule="evenodd" stroke="#D1D7F4">
                <path d="M48.2596062 21.77953043l-3.73994663-2.20391561-9.91446275 14.92071963L27.39759152.5872176l-5.21678726 1.10886237 7.20760529 33.90911686-15.12611583-9.59818035-2.52019802 3.53455043 21.918001 13.33437954z" />
                <path d="M58.6351704 32.1148474l3.32658705 15.65036162L9.79388537 58.85383254 6.46729832 43.20347093l-5.2167872 1.10886235 3.770132 17.73707656 1.77417976 8.34685949 4.17342977-.88708988L65.22283953 57.977011l4.1734298-.8870899-1.77417976-8.34685949-3.770132-17.73707655z" />
              </g>
            </svg>
          </div>
          <h4>No results found.</h4>
          <p>
            It appears we don't have an icon that matches your search. Try
            different search terms or give us a hand - submit your own design to
            the library.
          </p>
          <Button
            href="https://github.com/carbon-design-system/carbon/tree/master/packages/icons"
            className="icon-empty-state__btn bx--btn"
            kind="secondary"
            icon="add--glyph"
            target="_blank"
            role="button"
            iconDescription="submit an icon">
            Submit an Icon
          </Button>
        </div>
      </div>
    );
  }
}

export default IconEmptyState;
