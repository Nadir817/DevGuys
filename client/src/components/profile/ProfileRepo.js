import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getGithubRepos } from "../../actions/profile";
import RepoItem from "./RepoItem";

const ProfileRepo = ({ username, repos, getGithubRepos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);

  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">
        <i className="fab fa-github"></i> Github Repos
      </h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map(repo => <RepoItem key={repo.id} repo={repo} />)
      )}
    </div>
  );
};

ProfileRepo.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileRepo);
