import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  ArrowUpRightIcon,
  BackwardIcon,
  ExclamationCircleIcon,
  ForwardIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useKeyPressEvent } from "react-use";

const quickActions = [
  { name: "Home", icon: ArrowUpRightIcon, shortcut: "", url: "/" },
  { name: "Blog Posts", icon: ArrowUpRightIcon, shortcut: "", url: "/docs" },
  { name: "Next Track", icon: ForwardIcon, shortcut: "→", url: "#" },
  { name: "Previous Track", icon: BackwardIcon, shortcut: "←", url: "#" },
  {
    name: "Increase Volume",
    icon: SpeakerWaveIcon,
    shortcut: "",
    url: "#",
  },
  {
    name: "Decrease Volume",
    icon: SpeakerWaveIcon,
    shortcut: "",
    url: "#",
  },
  { name: "Mute Track", icon: SpeakerXMarkIcon, shortcut: "M", url: "#" },
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export const CommandPalette = () => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filteredActions =
    query === ""
      ? []
      : quickActions.filter((project) => {
          return project.name.toLowerCase().includes(query.toLowerCase());
        });

  useKeyPressEvent((e) => {
    if (e.metaKey || e.ctrlKey) {
      if (e.key == "k") {
        e.stopPropagation();
        e.preventDefault();
        open ? setOpen(false) : setOpen(true);
      }
    }
    return true;
  });

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-10 overflow-hidden rounded-xl bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter transition-all">
              <Combobox
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(item: any) => (window.location = item.url)}
              >
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-900 text-opacity-40"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Search for actions or blog posts"
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>
                {(query === "" || filteredActions.length > 0) && (
                  <Combobox.Options
                    static
                    className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-10 overflow-y-auto"
                  >
                    <ul className="text-sm text-gray-700">
                      {(query === "" ? [] : filteredActions).map((action) => (
                        <Combobox.Option
                          key={action?.name}
                          value={action}
                          className={({ active }) =>
                            classNames(
                              "flex cursor-default select-none items-center rounded-md px-3 py-2",
                              active && "bg-gray-900 bg-opacity-5 text-gray-900"
                            )
                          }
                        >
                          {({ active }) => (
                            <>
                              <ArrowUpRightIcon
                                className={classNames(
                                  "h-6 w-6 flex-none text-gray-900 text-opacity-40",
                                  active && "text-opacity-100"
                                )}
                                aria-hidden="true"
                              />
                              <span className="ml-3 flex-auto truncate">
                                {action?.name}
                              </span>
                              {active && (
                                <span className="ml-3 flex-none text-gray-500">
                                  Jump to...
                                </span>
                              )}
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </ul>
                    {query === "" && (
                      <li className="p-2">
                        <h2 className="sr-only">Quick actions</h2>
                        <ul className="text-sm text-gray-700">
                          {quickActions.map((action) => (
                            <Combobox.Option
                              key={action.name}
                              value={action}
                              className={({ active }) =>
                                classNames(
                                  "flex cursor-default select-none items-center rounded-md px-3 py-2",
                                  active &&
                                    "bg-gray-900 bg-opacity-5 text-gray-900"
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <action.icon
                                    className={classNames(
                                      "h-6 w-6 flex-none text-gray-900 text-opacity-40",
                                      active && "text-opacity-100"
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3 flex-auto truncate">
                                    {action.name}
                                  </span>
                                  <span className="text-md ml-3 flex-none font-semibold text-gray-500">
                                    {action.shortcut !== "" && (
                                      <>
                                        <kbd className="font-sans">⌘</kbd>
                                        <kbd className="font-sans">
                                          {action.shortcut}
                                        </kbd>
                                      </>
                                    )}
                                  </span>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {query !== "" && filteredActions.length === 0 && (
                  <div className="py-10 px-6 text-center sm:px-14">
                    <ExclamationCircleIcon
                      className="mx-auto h-6 w-6 text-gray-900 text-opacity-40"
                      aria-hidden="true"
                    />
                    <p className="text-md mt-2 text-gray-900">
                      There&apos;s nothing like that here, are you sure
                      you&apos;re looking for the right thing?
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
