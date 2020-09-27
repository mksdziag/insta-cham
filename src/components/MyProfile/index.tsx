import React from 'react';
import InfoLevel from '../Profile/InfoLevel';
import ProfileDescription from '../Profile/ProfileDescription';
import PostSimplePreview from '../Shared/PostPreviewSimple';

export default function Account() {
  return (
    <div className="my-profile">
      <div className="my-profile__user">
        <div className="my-profile-user">
          <div className="my-profile-user__avatar">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt=""
            />
          </div>
          <div className="my-profile-user__info-content">
            <h2 className="">jean.dlb</h2>
            <InfoLevel flatted />
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              reiciendis error. Exercitationem amet repellendus laboriosam
              pariatur. Totam eos inventore modi exercitationem quas, expedita
              accusantium sequi ratione. Accusantium, iure asperiores. Ipsam.
            </div>
          </div>
        </div>
      </div>
      <div className="my-profile__publications">
        <div className="publication-tabs">
          <div className="publication-tabs__tab-links">
            <span className="publication-tabs__tab-link publication-tabs__tab-link--active">
              All
            </span>
            <span className="publication-tabs__tab-link">Most popular</span>
            <span className="publication-tabs__tab-link">Not visible</span>
          </div>
          <div className="publication-tabs__tab-content">
            <div className="publications-gallery-grid">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="publications-gallery-grid__item">
                  <PostSimplePreview />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
