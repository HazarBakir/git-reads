import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Dialog = (props: React.ComponentProps<typeof DialogPrimitive.Root>) => (
  <DialogPrimitive.Root data-slot="dialog" {...props} />
);

const DialogTrigger = (
  props: React.ComponentProps<typeof DialogPrimitive.Trigger>
) => <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;

const DialogPortal = (
  props: React.ComponentProps<typeof DialogPrimitive.Portal>
) => <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;

const DialogClose = (props: React.ComponentProps<typeof DialogPrimitive.Close>) => (
  <DialogPrimitive.Close data-slot="dialog-close" {...props} />
);

const DialogOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <>
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 backdrop-blur-md",
        className
      )}
      {...props}
    />
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        style={{
          animationDelay: "0s",
          animationDuration: "8s",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-white/8 rounded-full blur-3xl"
        style={{
          animationDelay: "2s",
          animationDuration: "10s",
          animation: "float 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        style={{
          animationDelay: "4s",
          animationDuration: "9s",
          animation: "float 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-48 h-48 bg-white/12 rounded-full blur-3xl"
        style={{
          animationDelay: "1s",
          animationDuration: "7s",
          animation: "float 7s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-white/8 rounded-full blur-3xl"
        style={{
          animationDelay: "3s",
          animationDuration: "11s",
          animation: "float 11s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-2/3 left-1/5 w-56 h-56 bg-white/10 rounded-full blur-3xl"
        style={{
          animationDelay: "5s",
          animationDuration: "9s",
          animation: "float 9s ease-in-out infinite",
        }}
      />
    </div>
    <style>{`
      @keyframes float {
        0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        25% { transform: translate(20px, -30px) scale(1.1); opacity: 0.8; }
        50% { transform: translate(-15px, 20px) scale(0.9); opacity: 0.7; }
        75% { transform: translate(30px, 15px) scale(1.05); opacity: 0.75; }
      }
    `}</style>
  </>
);

const DialogContent = ({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) => (
  <DialogPortal data-slot="dialog-portal">
    <DialogOverlay />
    <div className="fixed inset-0 z-60 flex items-center justify-center pointer-events-none">
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "pointer-events-auto bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 w-full max-w-[calc(100%-2rem)] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg space-y-3",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </div>
  </DialogPortal>
);

const DialogHeader = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="dialog-header"
    className={cn("flex flex-col gap-3 mb-2 text-center sm:text-left", className)}
    {...props}
  />
);

const DialogFooter = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    data-slot="dialog-footer"
    className={cn(
      "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
      className
    )}
    {...props}
  />
);

const DialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title
    data-slot="dialog-title"
    className={cn("text-lg leading-snug font-semibold mb-1", className)}
    {...props}
  />
);

const DialogDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) => (
  <DialogPrimitive.Description
    data-slot="dialog-description"
    className={cn("text-muted-foreground text-sm mb-2 leading-relaxed", className)}
    {...props}
  />
);

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
