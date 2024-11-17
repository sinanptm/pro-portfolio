export const GITHUB_API_BASE_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || '';

export const githubApiHeaders = {
    'Authorization': `Bearer ${GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'X-GitHub-Api-Version': '2022-11-28'
};

export class GitHubApiError extends Error {
    constructor(message: string, public status?: number, public response?: unknown) {
        super(message);
        this.name = 'GitHubApiError';
    }
}

export interface PullRequestStats {
    open: number;
    closed: number;
    merged: number;
}

export interface IssueStats {
    open: number;
    closed: number;
}


export interface ContributionDay {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionStats {
    totalContributions: number;
    contributionDays: ContributionDay[];
}