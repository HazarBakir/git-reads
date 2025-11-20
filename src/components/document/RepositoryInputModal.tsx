import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { parseGitHubUrl, toRepositoryInfo } from "@/utils/githubUrlParser";
import type { RepositoryInfo } from "@/types";

interface RepositoryInputModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRepositoryChange: (info: RepositoryInfo) => void;
  currentRepository?: RepositoryInfo;
}

export function RepositoryInputModal({
  open,
  onOpenChange,
  onRepositoryChange,
  currentRepository,
}: RepositoryInputModalProps) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [internalOpen, setInternalOpen] = useState(open);

  useEffect(() => {
    setInternalOpen(open);
    if (open) {
      if (currentRepository) {
        const branch =
          currentRepository.branch && currentRepository.branch !== "main"
            ? `/tree/${currentRepository.branch}`
            : "";
        setUrl(
          `https://github.com/${currentRepository.owner}/${currentRepository.repo}${branch}`
        );
      } else {
        setUrl("");
      }
      setError(null);
    }
  }, [open, currentRepository]);

  const handleSubmit = useCallback(
    async (
      e:
        | React.FormEvent<HTMLFormElement>
        | KeyboardEvent
        | React.KeyboardEvent<HTMLInputElement>
    ) => {
      if ("preventDefault" in e && typeof e.preventDefault === "function") {
        e.preventDefault();
      }
      if (isLoading) return;
      setError(null);
      setIsLoading(true);

      try {
        const trimmedUrl = url.trim();
        if (!trimmedUrl) {
          setError("Repository URL cannot be empty.");
          setIsLoading(false);
          return;
        }
        const parsed = parseGitHubUrl(trimmedUrl);
        if (!parsed.isValid) {
          setError("Invalid GitHub URL. Example: https://github.com/owner/repo");
          setIsLoading(false);
          return;
        }
        const info = toRepositoryInfo(parsed);
        if (!info) {
          setError(
            "Could not extract repository information. Please enter a valid GitHub URL."
          );
          setIsLoading(false);
          return;
        }
        onRepositoryChange(info);
        setUrl("");
        setError(null);
        setInternalOpen(false);
        onOpenChange(false);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, url, onRepositoryChange, onOpenChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey && !isLoading) {
        e.preventDefault();
        handleSubmit(e);
      }
    },
    [handleSubmit, isLoading]
  );

  const handleDialogOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      setInternalOpen(true);
      onOpenChange(true);
    }
  };

  const handleBackHome = () => {
    window.location.href = "/";
  };

  return (
    <Dialog open={internalOpen} onOpenChange={handleDialogOpenChange}>
      <DialogContent
        className="sm:max-w-[500px] relative border-primary/20 shadow-2xl shadow-primary/10"
        showCloseButton={false}
      >
        <div className="absolute inset-0 rounded-lg bg-linear-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
        <DialogHeader className="relative z-10">
          <DialogTitle>Select GitHub Repository</DialogTitle>
          <DialogDescription>
            Enter a GitHub repository URL to view its README file. Example:
            https://github.com/owner/repo
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 relative z-10"
          autoComplete="off"
        >
          <div className="space-y-2">
            <Label htmlFor="github-url">Repository URL</Label>
            <Input
              id="github-url"
              type="text"
              placeholder="https://github.com/owner/repo"
              value={url}
              onChange={e => {
                setUrl(e.target.value);
                if (error) setError(null);
              }}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className={
                error
                  ? "border-destructive"
                  : "focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              }
              autoFocus
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
            <p className="text-xs text-muted-foreground">
              Press Enter or click the button to continue.
            </p>
          </div>
          <div className="flex justify-between gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleBackHome}
              disabled={isLoading}
            >
              Back
            </Button>
            <Button type="submit" disabled={isLoading || !url.trim()}>
              {isLoading ? "Loading..." : "Load"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
